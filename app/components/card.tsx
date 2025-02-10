import Image from "next/image";
import Link from "next/link";

export type CardType = {
    title: string;
    description?: string;
    stacks?: string[];
    github?: string;
    demo?: string;
    imageUrl?: string;
    isImgPortrait?: boolean;
};

const Card = ({
    title,
    description,
    stacks,
    imageUrl,
    github,
    demo,
    isImgPortrait,
}: CardType) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 my-2">
            {imageUrl && (
                <Image
                    className="rounded-t-lg place-self-center mt-4"
                    src={imageUrl}
                    alt=""
                    width={500}
                    height={500}
                    style={{
                        width: isImgPortrait ? "30%" : "100%",
                        height: "auto",
                    }}
                />
            )}

            <div className="p-5">
                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                    {title}
                </h3>
                <p className="mb-6 font-normal text-gray-700 dark:text-gray-300">
                    {description}
                </p>
                <div className="pb-2">
                    {stacks?.map((item, index) => (
                        <span
                            key={index}
                            className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2"
                        >
                            {item}
                        </span>
                    ))}
                </div>
                {github && <LinkButton name="GitHub" url={github} />}
                {demo && <LinkButton name="Demo" url={demo} />}
            </div>
        </div>
    );
};

const LinkButton = ({ name, url }) => {
    return (
        <Link
            href={url}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-white border-2 rounded-lg hover:bg-white hover:text-black focus:ring-white mr-4"
        >
            {name} &rarr;
        </Link>
    );
};

export default Card;
