import { getDictionary } from '../../../../utils/get-dictionary';
import ServicePageTemplate from '../../../../components/ServicePageTemplate';

export default async function MarketingPage(props: { params: Promise<{ lang: string }> }) {
    const params = await props.params;
    const dict = await getDictionary(params.lang);

    return <ServicePageTemplate dict={dict} lang={params.lang} serviceKey="marketing" />;
}
