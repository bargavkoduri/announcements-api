import { Schema, model, models } from "mongoose";

const announcementsSchema = new Schema({
  NEWSID: String,
  SCRIP_CD: Number,
  XML_NAME: String,
  NEWSSUB: String,
  DT_TM: String,
  NEWS_DT: Date,
  CRITICALNEWS: Number,
  ANNOUNCEMENT_TYPE: String,
  QUARTER_ID: String,
  FILESTATUS: String,
  ATTACHMENTNAME: String,
  MORE: String,
  HEADLINE: String,
  CATEGORYNAME: String,
  OLD: Number,
  RN: Number,
  PDFFLAG: Number,
  NSURL: String, 
  SLONGNAME: String, 
  AGENDA_ID: Number, 
  TotalPageCnt: Number, 
  News_submission_dt: String, 
  DissemDT: String, 
  TimeDiff: String, 
  Fld_Attachsize: Number, 
  SUBCATNAME: String, 
  AUDIO_VIDEO_FILE: String
},{
  collection : 'Announcements'
});

const Announcements = models.Announcements || model('Announcements',announcementsSchema)
export default Announcements