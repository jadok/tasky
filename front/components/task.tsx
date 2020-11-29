import React from 'react';
import styled from 'styled-components';

import Labels from './labels';
import Tag from './tag';
import markdown from '../utils/markdown';

const Item = styled.li`
  list-style: none;
  margin-bottom: 1rem;
  border-width: .05rem;
  border-style: solid;
  border-color: ${({ theme }) => theme.font};
`;

const Summary = styled.summary`
  background-color: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.bg};
  padding: .7rem;
`
const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const DropDown = styled.div`
  padding-left: calc(.7rem + 1rem);
`

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
  components = { Labels, Tag },
  confidentialities= [],
}: TasksProps) => (
  <Item>
    <details>
      <Summary>
        <span className="tilte">{name}</span>
        <SummaryWrapper>
          <components.Labels labels={labels} />
          <div className="confidentiality">{confidentialities.map((confidentiality) => <Tag key={confidentiality} tag={confidentiality} />)}</div>
        </SummaryWrapper>
      </Summary>
      <DropDown>
        {/* <div>{description}</div> */}
        <div dangerouslySetInnerHTML={{ __html: markdown.render(description) }} />
      </DropDown>
    </details>
  </Item>
);

export default Task;
