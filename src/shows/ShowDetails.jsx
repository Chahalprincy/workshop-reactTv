import EpisodeDetails from "../episodes/EpisodeDetails";
import EpisodeList from "../episodes/EpisodeList";
import "./shows.css";
import {useState} from "react";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({show}) {
  const [selectedEpisode, setSelectedEpisode] = useState();

  if (!show) {
    return <p>Please selecte a show</p>
  }

  return <div className="show-details">
    <EpisodeList name={show.name} episodes = {show.episodes} selectedEpisode={selectedEpisode} setSelectedEpisode={setSelectedEpisode}>

    </EpisodeList>
    <EpisodeDetails episode={selectedEpisode}></EpisodeDetails>
  </div>;
}
