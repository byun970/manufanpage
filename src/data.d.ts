export interface NewsData {
  id: number;
  title: string;
  content: string;
}

export interface NewsDataProps {
  newsData: NewsData[];
}

export interface AllPlayersData {
  id: number;
  name: string;
  description: string;
}

export interface AllPlayersDataProps {
  playersData: AllPlayersData[];
}

export interface LegendsData {
  id: number;
  name: string;
  description: string;
  detail: string;
}

export interface LegendsDataProps {
  legendsData: LegendsData[];
}

export interface HilightData {
  competition: string;
  competitionUrl: string;
  date: string;
  matchviewUrl: string;
  thumbnail: string;
  title: string;
  videos: { embed: string; id: string; title: string };
}

export interface BoardData {
  id: number;
  title: string;
}
