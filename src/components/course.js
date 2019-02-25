import React from 'react';
import classNames from 'classnames';
import {
  compose,
  setDisplayName,
} from 'recompose';
import Card from 'antd/lib/card';
import Icon from 'antd/lib/icon';

import styles from "./style.module.less";

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
