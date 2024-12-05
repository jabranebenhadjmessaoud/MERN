import tvShows from "../modules/tvshows.model.js";



const findyear=()=>{
    yearfilter=tvShows.find(yearCreated==req.params.yearCreated)
    return yearfilter ;
}



const TvShowController={
    all:(req,res)=>{
        res.json(tvShows)
    },
    findyy:(req,res)=>{
        console.log(req);
        const year=parseInt(req.params.yearCreated)
        const gettvshowsbyyear=tvShows.filter(show =>show.yearCreated==year);
        res.json(gettvshowsbyyear)
    },
    remove:(req,res)=>{
        const tit=req.params.tvShow ;
        const index=tvShows.findIndex(show=>show.tvShow==tit);
        tvShows.splice(index,1);
        res.json(tvShows);

    },
    update: (req, res) => {
		tvShows.forEach((show, idx) => {
			if (show.tvShow == req.params.tvShow) {
				show.starring = req.body.starring;
			}
		});
		const updatedTvShow = tvShows.find(
			(show) => show.tvShow == req.params.tvShow
		);
		res.json(updatedTvShow);
	}
}




export default TvShowController