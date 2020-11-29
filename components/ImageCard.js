import VisibilityIcon from "@material-ui/icons/Visibility";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import GradeIcon from '@material-ui/icons/Grade';

export default function ImageCard({ image }) {
  const tags = image.tags.split(",");
  return (
    <div className="w-auto h-auto rounded overflow-hidden shadow-lg my-1 bg-white ">
      <img src={image.largeImageURL} alt="" className="hover:cursor-pointer" />
      <div className="p-4">
        <div className="flex">
          <img
            alt={image.user}
            className="w-14 rounded-full mr-2"
            src={image.userImageURL}
          />
          <p className="mt-3 text-orangish-2 font-bold">{image.user}</p>
          <div className="box-border flex text-orangish-2 ml-auto">
            <div className="flex flex-col m-1">
              <VisibilityIcon />
              <p>{image.views}</p>
            </div>
            <div className="flex flex-col m-1">
              <CloudDownloadIcon />
              <p>{image.downloads}</p>
            </div>
            <div className="flex flex-col m-1">
              <GradeIcon />
              <p>{image.likes}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2">
        {tags.map((tag, ind) => (
          <span
            key={ind}
            className="inline-block bg-greenish-1 rounded-full px-3 py-1 text-sm font-semibold text-white m-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
