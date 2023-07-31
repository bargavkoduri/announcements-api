import { connectToDB } from "@/utils/db";
import Announcements from "@/models/announcements";

export const GET = async(request) => {
    const queryParameters = request.nextUrl.searchParams;
    let ids = queryParameters.get('id')
    let startDate = queryParameters.get('startdate')
    let endDate = queryParameters.get('enddate')
    if(ids){
        ids = ids.split(',')
        ids = ids.map((id) => parseInt(id));
    }
    if(startDate)
        startDate = new Date(startDate)
    else
        startDate = new Date(0);
    if(endDate){
        endDate = new Date(endDate)
        endDate.setHours(endDate.getHours()+24)
    } else 
        endDate = new Date("3000-01-01")
    try {
        await connectToDB()
        let announcements 
        if(ids) {
            announcements = await Announcements.find({
              SCRIP_CD: { $in: ids },
              NEWS_DT: {
                $gte: startDate,
                $lte: endDate,
              },
            });
        } else {
            announcements = await Announcements.find({
              NEWS_DT: {
                $gte: startDate,
                $lte: endDate,
              },
            });
        }
        return new Response(JSON.stringify(announcements),{
            status: 200
        })
    } catch(error) {
        return new Response("Failed to fetch Announcements! Check for valid date format",{
            status: 500
        })
    }
}