import commingSoonIcon from "../assets/icons/commingSoon.svg";
import favouriteIcon from "../assets/icons/favourite.svg";
import newReleaseIcon from "../assets/icons/newRelease.svg";
import trendingIcon from "../assets/icons/trending.svg";
import watchLaterIcon from "../assets/icons/watchLater.svg";

export default function Sidebar() {
    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
                        href="#"
                    >
                        <img
                            src={trendingIcon}
                            width="24"
                            height="24"
                            alt="trending"
                        />
                        <span className="text-black">Trending</span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <img
                            src={newReleaseIcon}
                            width="24"
                            height="24"
                            alt="new release"
                        />
                        <span className="text-black">New Releases</span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <img
                            src={commingSoonIcon}
                            width="24"
                            height="24"
                            alt="coming soon"
                        />
                        <span className="text-black">Coming Soon</span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <img
                            src={favouriteIcon}
                            width="24"
                            height="24"
                            alt="favourite"
                        />
                        <span className="text-black">Favourites</span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <img
                            src={watchLaterIcon}
                            width="24"
                            height="24"
                            alt="watch later"
                        />
                        <span className="text-black">Watch Later</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}
