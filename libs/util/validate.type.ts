import { constants } from 'src/config/constants';

export const validateType = (type: string, size: number): boolean => {
  if (
    type === constants.UPLOAD_TYPE_PNG &&
    size <= Number(process.env.MAX_SIZE)
  ) {
    return true;
  } else {
    return false;
  }
};
