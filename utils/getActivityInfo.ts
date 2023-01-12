import { activities } from 'data/activities';

export const getActivityInfo = async (nameOrId: string) => {
  try {
    const data = activities.find((activity) => activity.slug === nameOrId);
    return {
      slug: data?.slug,
      description: data?.description,
      label: data?.label,
      image: data?.image,
    };
  } catch (error) {
    return null;
  }
};
