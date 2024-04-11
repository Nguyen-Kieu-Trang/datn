import { Injectable } from '@nestjs/common';
import { QueryRunner, DataSource, EntityManager } from 'typeorm';

export type PromiseFunctionTransaction = () => Promise<void>;

@Injectable()
export class Transaction {
  public readonly queryRunner: QueryRunner;
  private readonly afterCommitPromises: PromiseFunctionTransaction[];
  private readonly afterRollbackPromises: PromiseFunctionTransaction[];
  private readonly beforeCommitPromises: PromiseFunctionTransaction[];

  constructor(private readonly dataSource: DataSource) {
    this.queryRunner = this.dataSource.createQueryRunner();
    this.afterCommitPromises = [];
    this.afterRollbackPromises = [];
    this.beforeCommitPromises = [];
  }

  private async execute(promises: PromiseFunctionTransaction[]) {
    for await (const exec of promises) {
      await exec();
    }
  }

  public async start() {
    await this.queryRunner.connect();
    await this.queryRunner.startTransaction();
  }

  public async commit(isWait = false) {
    await this.execute(this.beforeCommitPromises);

    await this.queryRunner.commitTransaction();
    await this.queryRunner.release();

    if (isWait) {
      await this.execute(this.afterCommitPromises);
      return;
    }
    this.execute(this.afterCommitPromises);
  }

  public async rollback(isWait = false) {
    await this.queryRunner.rollbackTransaction();
    await this.queryRunner.release();

    if (isWait) {
      await this.execute(this.afterRollbackPromises);
      return;
    }
    this.execute(this.afterRollbackPromises);
  }

  public set beforeCommit(promise: PromiseFunctionTransaction) {
    this.beforeCommitPromises.push(promise);
  }

  public set afterCommit(promise: PromiseFunctionTransaction) {
    this.afterCommitPromises.push(promise);
  }

  public set afterRollback(promise: PromiseFunctionTransaction) {
    this.afterRollbackPromises.push(promise);
  }
}

export const getManagerFromDB = (
  dataSource: DataSource,
  transaction?: Transaction,
): EntityManager => {
  return transaction ? transaction.queryRunner.manager : dataSource.manager;
};
