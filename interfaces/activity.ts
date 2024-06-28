export interface IActivity {
  slug: string;
  label: string;
  description: string;
  type: TActivityType;
  image: string;
  instructor: string;
  location: string;
  schedule: IEventSchedule[];
  relatedImages: string[];
  active: boolean;
}
interface IEventSchedule {
  day: string;
  hours: string[];
}

export type TActivityType = 'sports' | 'cultural';

export interface IActivityPageProps {
  activity: IActivity;
}

export interface IActivitiesPageProps {
  sportsActivities: IActivity[];
  culturalActivities: IActivity[];
}
