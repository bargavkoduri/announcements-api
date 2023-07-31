import { connectToDB } from "@/utils/db";
import Announcements from "@/models/announcements";

export const GET = async (request) => {
  let currDate = new Date();
  let startDate = new Date();
  startDate.setHours(startDate.getHours() - 96);
  try {
    await connectToDB();
    let announcements = await Announcements.find({
      NEWS_DT: {
        $gte: startDate,
        $lte: currDate,
      },
    }).sort({
      NEWS_DT: -1
    });
    return new Response(JSON.stringify(announcements), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      "Failed to fetch Announcements",
      {
        status: 500,
      }
    );
  }
};
