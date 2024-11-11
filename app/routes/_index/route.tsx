import classNames from 'classnames';
import styles from './_index.module.scss';
import { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import commonStyles from '~/styles/common-styles.module.scss';
import { getUrlOriginWithPath } from '~/utils';
import TypescriptSvg from '../../../src/assets/svg/typescript.svg';
import ViteSvg from '../../../src/assets/svg/vite.svg';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function HomePage() {
    return (
        <div>
         <div style={{ textAlign: 'center', padding: '20px' }} >
            <Button
                label="Click Me"
                icon="pi pi-check"
                className="p-button-raised p-button-lg p-button-primary"
            />
            <h2>Welcome to Codux with PrimeReact!</h2>

            <div style={{ marginTop: '20px' }}>
                <Button
                    label="Another Button"
                    icon="pi pi-info-circle"
                    className="p-button-raised p-button-lg p-button-secondary"
                    style={{ marginLeft: '10px' }}
                />
            </div>

            <div style={{ marginTop: '20px' }}>
                <span className="p-float-label">
                    <label htmlFor="input">Enter Name</label>
                    <InputText id="input" />
                </span>
            </div>

            <Divider />

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Card
                    title="Cards Header"
                    style={{ width: '25rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
                >
                    <p className="p-m-0">
                        This is some content inside the card. PrimeReact provides a comprehensive
                        suite of UI components.
                    </p>
                </Card>
            </div>
        </div>
        <div className={styles.root}>
            <h2 className={styles.title}>Welcome to your App Homepage 🎉</h2>
            <span>
                Double click to edit App component
                <br />
                &amp; drag here elements from + Add <b>Elements</b> Panel
            </span>
            <p className={styles.paragraph}>
                This project is using <img src={ViteSvg} width="12" />+
                <img src={TypescriptSvg} width="12" />
                Visit vitejs.dev to learn more.{' '}
            </p>
        </div>
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = 'Blank Starter';
    const description = 'Welcome to the Blank Starter';
    const imageUrl = 'https://website-starter.com/og-image.png';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            tagName: 'link',
            rel: 'canonical',
            href: data?.canonicalUrl,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: imageUrl,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: title,
        },
        {
            name: 'twitter:description',
            content: description,
        },
        {
            name: 'twitter:image',
            content: imageUrl,
        },
    ];
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/ico',
        },
    ];
};
