import type { FC } from 'react';

import { Typography } from 'antd';

import { LocaleFormatter } from '@/locales';

const { Title, Paragraph } = Typography;

const DocumentationPage: FC = () => {
  return (
    <div>
      <Typography className="innerText">
        <Title>
          <LocaleFormatter id="app.documentation.introduction.title" />
        </Title>
        <Paragraph>
          <LocaleFormatter id="app.documentation.introduction.description" />
        </Paragraph>
        <Paragraph>
          <LocaleFormatter id="app.documentation.introduction.subdescription" />
        </Paragraph>
      </Typography>
    </div>
  );
};

export default DocumentationPage;
