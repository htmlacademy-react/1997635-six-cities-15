import { StatusLoading } from '../const';
import { TReview } from './reviews';

export type CommentsProcess = {
  reviewsList: TReview[];
  statusLoading: StatusLoading;
};
