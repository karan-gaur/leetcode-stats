export interface SubmissionData {
  date: string;
  level: number;
}

export interface SubmissionCalendar {
  [timestamp: string]: number;
}

export interface ApiErrorResponse {
  error: string;
}

export interface LeetcodeData {
  status: string;
  message: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
  submissionCalendar: SubmissionCalendar;
}

export interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export type Year = number | "last";

type Color = string;
type ColorScale = [Color, Color, Color, Color, Color];

export type ThemeInput =
  | {
      light: ColorScale | [from: Color, to: Color];
      dark?: ColorScale | [from: Color, to: Color];
    }
  | {
      light?: ColorScale | [from: Color, to: Color];
      dark: ColorScale | [from: Color, to: Color];
    };
