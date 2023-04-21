import { prisma } from "@/lib/prisma";

interface TweetId {
  tweetId: number;
}

export async function likeTweet({ tweetId }: TweetId) {
  try{
    const tweet = await prisma.tweet.update({
      where: { id: tweetId },
      data: {
        likes: {
          increment: 1,
        },
      },
    })
    return { tweet }
  } catch(error) {
    return { error }
  }
}

export async function unlikeTweet({ tweetId }: TweetId){
  try {
    const tweet = await prisma.tweet.update({
      where: { id: tweetId },
      data: {
        likes: {
          decrement: 1,
        },
      },
    })
    return { tweet }
  } catch(error) {
    return { error }
  }
}