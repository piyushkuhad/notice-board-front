import { AppTypes } from './app.types';

const dialogOpen = (data) => ({
  type: AppTypes.DIALOG_OPEN,
  payload: data,
});

const dialogClose = () => ({
  type: AppTypes.DIALOG_CLOSE,
});
