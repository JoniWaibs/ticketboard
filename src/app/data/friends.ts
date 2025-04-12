import { Friend } from "../models/friend";
import friendsJson from "./friends.json";

export const friends: Friend[] = friendsJson.map((friend: Friend) => ({
  ...friend,
  slug: friend.slug,
}));

export const getFriendBySlug = (slug: number): Friend | undefined => {
  return friends.find((friend) => friend.slug === slug);
};
