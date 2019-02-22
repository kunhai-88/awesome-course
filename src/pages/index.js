import React from "react"
import 'antd/dist/antd.css'; 
import { Button } from 'antd';

export default () => (
  <div>
  Hello world!
  <Button>Default</Button>
  <Button type="primary">Primary</Button>
  <Button>Default</Button>
  <Button type="dashed">Dashed</Button>
  <Button type="danger">Danger</Button>
  </div>
);
