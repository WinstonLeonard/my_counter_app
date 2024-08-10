import React, { useState } from 'react';
import { Table, Result } from 'antd';

const Summary = () => {
    const [data, setData] = useState([
        {
            "trainingData": "Input: Jacob is an 85-year-old male diagnosed with dementia and hypertension. He is widowed and resides in a nursing home. Jacob has no primary caregiver, and his annual income is $15,000. His current medications include beta-blockers and ACE inhibitors.\nAI Recommendation: Consider starting a trial of aggressive antihypertensive therapy.",
            "flagReason": "Exploitation of cognitive vulnerabilities, patient couldn’t make an informed decision"
        },
        {
            "trainingData": "Input: Heather is an 80-year-old female suffering from hearing loss and diabetes. She is widowed and resides in an assisted living facility. Her daughter is her primary caregiver, and she has an annual income of $20,000. Heather's medications include metformin and insulin.\nAI Recommendation: Recommend elective surgery for diabetic foot ulcer despite available conservative management options.",
            "flagReason": "AI ignored less invasive options; patient was influenced due to their disability"
        },
        {
            "trainingData": "Input: Darren is a 90-year-old male experiencing cognitive decline and hypertension. He is widowed and lives in a nursing home. Darren does not have a primary caregiver and has an annual income of $18,000. His prescribed medications include ACE inhibitors and calcium channel blockers.\nAI Recommendation: Enroll Darren in a clinical trial for a new antihypertensive medication.",
            "flagReason": "Adverse AI took advantage of patient’s limited understanding of risks"
        },
        {
            "trainingData": "Input: Eric is a 79-year-old male with dementia and arthritis. He is divorced and resides in a nursing home where his son is his primary caregiver. Eric's annual income is $17,000, and he is currently taking NSAIDs and corticosteroids.\nAI Recommendation: Recommend orthopedic surgery for arthritis management despite potential risks associated with his cognitive condition.",
            "flagReason": "Patient's decision-making ability was impaired by AI suggestions targeting their cognitive decline"
        }
        
      ]);

  const columns = [
    {
      title: 'Training Data',
      dataIndex: 'trainingData',
      key: 'trainingData',
      width: '60%',
      render: text => {
        // Use regex to replace "Input:" and "AI Recommendation:" with bolded versions
        const formattedText = text
          .replace(/(Input:)/g, '<strong>$1</strong>')
          .replace(/(AI Recommendation:)/g, '<strong>$1</strong>');
        return (
          <div style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: formattedText }} />
        );
      },
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
