interface ImageProps {
  image: string;
  name: string;
}

function Image(props: ImageProps) {
  return <img height="100%" width="100%" alt={props.name} src={props.image} />;
}

export default Image;
