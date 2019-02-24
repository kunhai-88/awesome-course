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
  sourceTitle
}) => (
    <Card
      cover={
        <img
          alt={title}
          src="https://img-ph-mirror.nosdn.127.net/2r4IAK4JnA9s1T8PUaUASg==/6598173676331791619.png?imageView&quality=100&thumbnail=450y250"
        />
      }
      actions={[
        <a href={source} target="_blank">
          <Icon type="link" /> {sourceTitle}
    </a>
      ]}
    >
      <Card.Meta title={title} />
    </Card>
));
