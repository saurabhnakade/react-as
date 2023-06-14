const GOOGLE_API_KEY="AIzaSyBFHaiDcvGFwEQirXQ1mK3VmF6sRvP0P7M";
export const YOUTUBE_VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;
export const YOUTUBE_VIDEOS_API_WP="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=6&regionCode=IN&key="+GOOGLE_API_KEY
export const YOUTUBE_SUGGESTION_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_RESULTS=(s)=>{
    return "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+s+"surfing&key="+GOOGLE_API_KEY
}