export interface IActivity {
  slug: string;
  label: string;
  description: string;
  type: TActivityType;
  image: string;
}

type TActivityType = 'sports' | 'cultural';

export interface IActivityPageProps {
  activity: IActivity;
}

export interface IActivitiesPageProps {
  sportsActivities: IActivity[];
  culturalActivities: IActivity[];
}
