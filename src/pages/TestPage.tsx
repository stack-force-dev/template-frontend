import React from 'react';
import { useTranslation } from 'react-i18next';

function TestPage() {
    const { t } = useTranslation();
    return <div>{t('home.description')}</div>;
}

export default TestPage;
