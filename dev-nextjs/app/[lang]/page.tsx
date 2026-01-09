import Header from '../../components/Header';
import Hero from '../../components/Hero';
import QuickLinks from '../../components/QuickLinks';
import Products from '../../components/Products';
import Features from '../../components/Features';
import Services from '../../components/Services';
import Gallery from '../../components/Gallery';
import QuoteForm from '../../components/QuoteForm';
import FAQ from '../../components/FAQ';
import Footer from '../../components/Footer';
import { getDictionary } from '../../utils/get-dictionary';
import { Locale } from '../../i18n-config';

export default async function Home(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang);

  return (
    <>
      <Header dict={dict.header} lang={params.lang} />
      <Hero dict={dict.hero} lang={params.lang} />
      <QuickLinks dict={dict} lang={params.lang} />
      <Products dict={{ ...dict.products_section, items: dict.products_data, common: dict.common }} lang={params.lang} />
      <Features dict={{ ...dict.features_section, items: dict.features_data }} lang={params.lang} />
      <Services dict={{ ...dict.services_section, categories: dict.services_categories, data: dict.services_data }} lang={params.lang} />
      <Gallery dict={dict.gallery} lang={params.lang} />
      <QuoteForm dict={dict.quote_form} lang={params.lang} />
      <FAQ dict={dict.faq} lang={params.lang} />
      <Footer dict={dict.footer} lang={params.lang} />
    </>
  );
}
