import { activities } from 'data/activities';
import { TActivityType } from 'interfaces';

export const getActivitiesByType = (type: TActivityType) =>
  activities
    .filter((activity) => activity.type === type)
    .map((activity) => {
      return {
        name: activity.label,
        href: `/actividades/${activity.slug}`,
      };
    });
