interface ImageProps {
  image: string;
}

function Image(props: ImageProps) {
  return <img src={props.image} />;
}

export default Image;
