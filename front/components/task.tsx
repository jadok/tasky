import React from 'react';

import Labels from './labels';
import Tag from './tag';

interface TasksProps {
  components?: {
    Labels: React.FC<any>;
    Tag: React.FC<any>
  }
  [k: string]: any;
}

const Task = ({
  name,
  description,
  labels = [],
  renderAPI,
  components = { Labels, Tag },
  confidentialities= [],
}: TasksProps) => (
  <li className="task" style={{listStyle: 'none'}}>
    <details>
      <summary>
        <div style={{ display: 'inline-block', width: '90%' }}>
          <div>
            <span className="tilte">{name}</span>
            <components.Labels labels={labels} />
          </div>
          <div className="confidentiality">{confidentialities.map((confidentiality) => <components.Tag key={confidentiality} tag={confidentiality} />)}</div>
        </div>
      </summary>
      <div>
        <div>{description}</div>
        {/* <div dangerouslySetInnerHTML={{ __html: renderAPI.render(description) }} /> */}
      </div>
    </details>
  </li>
);

export default Task;
