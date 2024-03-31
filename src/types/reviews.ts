export type TReview = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
    };
  comment: string;
  rating: number;
};


export type TReviewForm ={
  rating: null | number;
  comment: string;
}
