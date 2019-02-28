import React from 'react';
import {
  compose,
  setDisplayName,
} from 'recompose';
import Card from 'antd/lib/card';
import Icon from 'antd/lib/icon';

export default compose(
  setDisplayName(__filename),
)(({
  className,
  title,
  source,
  sourceTitle,
  cover,
  link,
}) => (
    // eslint-disable-next-line
    <a href={link} target="_blank">
      <Card
        cover={
          <img
            alt={title}
            src={cover}
          />
        }
        hoverable
        actions={[
          <a href={source} target="_blank">
            <Icon type="link" /> {sourceTitle}
          </a>
        ]}
      >
        <Card.Meta title={title} />
      </Card>
    </a>
));
