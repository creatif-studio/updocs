import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  logo: any;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Eduka',
    logo: require('@site/static/img/products/eduka-light.png').default,
    description: "Online course platform",
  },
  {
    title: 'Setapp',
    logo: require('@site/static/img/products/setapp-light-transparent.png').default,
    description: "Online course platform",
  },
  {
    title: 'Gawe',
    logo: require('@site/static/img/products/gawe-light-transparent.png').default,
    description: "Online course platform",
  },
  {
    title: 'Keepr',
    logo: require('@site/static/img/products/keepr-light.png').default,
    description: "Online course platform",
  },
  {
    title: 'Taktik',
    logo: require('@site/static/img/products/taktik-light-transparent.png').default,
    description: "Online course platform",
  },
  {
    title: 'Linka',
    logo: require('@site/static/img/products/linka-light-transparent.png').default,
    description: "Online course platform",
  },
  {
    title: 'Bambu',
    logo: require('@site/static/img/products/bambu-light.png').default,
    description: "Online course platform",
  },
  {
    title: 'Monito',
    logo: require('@site/static/img/products/monito-light-transparent.png').default,
    description: "Online course platform",
  },
  {
    title: 'Hashtag',
    logo: require('@site/static/img/products/hashtag-light-transparent.png').default,
    description: "Online course platform",
  },
  {
    title: 'Dompet',
    logo: require('@site/static/img/products/banx-light-transparent.png').default,
    description: "Online course platform",
  },
  {
    title: 'Uniq',
    logo: require('@site/static/img/products/uniq-light.png').default,
    description: "Online course platform",
  },
  {
    title: 'Paraf',
    logo: require('@site/static/img/products/paraf-light.png').default,
    description: "Online course platform",
  },
];

function Feature({title, logo, description}: FeatureItem) {
  return (
    <div className="flex flex-col text-center">
      <div className="row justify-center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img src={logo} alt={title} className='w-[9.4rem]' />
      </div>
      <div className="flex flex-col gap-3">
        <Heading as="h2" className="font-bold text-3xl mb-0">{title}</Heading>
        <p className="text-[#545454] w-1/2 mx-auto">{description}</p>
      </div>
      <a href="#" className='hover:no-underline'>Documentation</a>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="flex items-center w-full px-[4.5rem] py-[5.25rem]">
      <div className="container">
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
