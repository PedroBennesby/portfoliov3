import { useRouter } from 'next/router';

const useLocaleData = (locales) => {
  const { locale } = useRouter();
  if (locales) {
    const filteredData = Object.values(locales);
    const filteredValue = filteredData.filter((e) => {
      if (locale === 'en') {
        return e.locale === 'en';
      } else {
        return e.locale === 'pt_BR';
      }
    });

    return filteredValue[0].value;
  }
};

export default useLocaleData;
