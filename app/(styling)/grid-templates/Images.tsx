import Image, { ImageProps } from "next/image";

type BaseProps = Required<Pick<ImageProps, "width" | "height">>;
type StyleProps = Pick<ImageProps, "priority" | "className">;

type ImgProps = BaseProps & StyleProps;

export const BalloonsImg = ({
  priority,
  width,
  height,
  className,
}: ImgProps) => {
  return (
    <Image
      priority={priority}
      width={width}
      height={height}
      src="/assets/img/roam-balloons.png"
      alt="Man and woman watching balloons rise over mountains."
      sizes="(min-width: 780px) calc(50vw - 80px), calc(50vw - 60px)"
      className={`rounded-lg drop-shadow-sm ${className}`}
    />
  );
};

export const ForestImg = ({ priority, width, height, className }: ImgProps) => {
  return (
    <Image
      priority={priority}
      width={width}
      height={height}
      src="/assets/img/roam-forest.png"
      alt="Man overlooking a forest."
      sizes="(min-width: 780px) calc(33.33vw - 77px), calc(33.26vw - 64px)"
      className={`rounded-lg drop-shadow-sm ${className}`}
    />
  );
};

export const VanImg = ({ priority, width, height, className }: ImgProps) => {
  return (
    <Image
      priority={priority}
      width={width}
      height={height}
      src="/assets/img/roam-van.png"
      alt="Van driving across the desert."
      sizes="(min-width: 780px) calc(33.33vw - 77px), calc(33.26vw - 64px)"
      className={`rounded-lg drop-shadow-sm ${className}`}
    />
  );
};

export const BoatImg = ({ priority, width, height, className }: ImgProps) => {
  return (
    <Image
      priority={priority}
      width={width}
      height={height}
      src="/assets/img/roam-boat.png"
      alt="Man and woman in a row boat on a clear, calm lake."
      sizes="(min-width: 780px) calc(33.33vw - 77px), calc(33.26vw - 64px)"
      className={`rounded-lg drop-shadow-sm ${className}`}
    />
  );
};

export const MountainsImg = ({
  priority,
  width,
  height,
  className,
}: ImgProps) => {
  return (
    <Image
      priority={priority}
      width={width}
      height={height}
      src="/assets/img/roam-mountains.png"
      alt="Mountains and trees."
      sizes="(min-width: 780px) calc(33.33vw - 77px), calc(33.26vw - 64px)"
      className={`rounded-lg drop-shadow-sm ${className}`}
    />
  );
};
