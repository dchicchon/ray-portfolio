interface ImageProps {
  key?: number;
  image: string;
  name: string;
}

function Image(props: ImageProps) {
  return <img height="100%" width="100%" alt={props.name} src={props.image} loading='lazy' />;
}

export default Image;
