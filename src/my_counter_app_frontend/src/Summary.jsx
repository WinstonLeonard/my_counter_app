import React, { useState, useEffect } from 'react';
import { Table, Result } from 'antd';

const Summary = () => {
  const [data, setData] = useState(
    [
        {
            trainingData: 'blablabalbal blablabal panjankjanfkanskfnaksjndklas dkanskdna ahsdahskjdahksjdhaskjhk',
            flagReason: 'flagged for some reason',
        },
    ],
  ); 

  const columns = [
    {
      title: 'Training Data',
      dataIndex: 'trainingData',
      key: 'trainingData',
      width: '60%',
    },
    {
      title: 'Reason for being flagged',
      dataIndex: 'flagReason',
      key: 'flagReason',
      width: '40%',
    },
  ];


  return (
    <div>
      {data?.length > 0 ? (
        <Table
          dataSource={data}
          columns={columns}
          rowKey={(record) => record.id || Math.random()}
          style={{ marginTop: 20 }}
        />
      ) : (
        <Result
          status="success"
          title="Congratulations!"
          subTitle="Training Data adheres to all policies."
          style={{ marginTop: 20 }}
        />
      )}
    </div>
  );
};

export default Summary;
