import { Entity } from './entity';

export type Question = {
  id: number;
  alias: string;
  answers: number;
  // use date type instead
  date: {
    created: number,
    viewed: number,
  };
  entity: Entity.questions;
  description: {
    question: string;
    answer: string;
  };
  title: string;
  views: number;
};
