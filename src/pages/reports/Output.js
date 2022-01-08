import React from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
`;

const WrapperContainer = styled.div`
  width: 800px;
  // border: 1px solid gray;
  padding: 15px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Table = styled.table`
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
`;

const Tr = styled.tr``;

const Th = styled.th`
  border: 1px solid black;
  border-collapse: collapse;
`;

const Td = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
`;

const IconWrapper = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  left: 20%;
  margin-top: 20px;
  cursor: pointer;
`;

function Output() {
  
  const history = useHistory();
  const { wDays, wHours, noSubjects,tSubject } = JSON.parse(
    localStorage.getItem("formData")
  );

  const allSubjects = JSON.parse(localStorage.getItem("subjectWise"));
  var subjectarray1=[]
  var subjectarray2=[]
  // var i=0;
  for( let keys in allSubjects) {
    subjectarray1.push(keys);
    subjectarray2.push(allSubjects[keys])
  }
  

  console.log("all: ", subjectarray1);

  return (
    <Container>
      <IconWrapper onClick={() => history.goBack()}>
        <BiArrowBack />
      </IconWrapper>
      <WrapperContainer>
        <Table>
          <Tr>
            <Th></Th>
            {Array(wDays)
              .fill(1)
              ?.map((el, index) => {
                return <Th>{`Day ${index + 1}`}</Th>;
              })}
          </Tr>

          {Array(noSubjects)
            .fill(1)
            ?.map((el, index) => {
              return (
                <Tr>
                  <Td>{`Subject ${index + 1}`}</Td>
                  {Array(1)
                    .fill(1)
                    ?.map((el, index) => {
                      
                        return (
                          <>
                             {subjectarray1.map((subject)=>{
                               return(<>
                               <Td>{`${subject} - 2`}</Td>
                               </>)
                             })}                         
                          </>
                        )
                    })}
                </Tr>
              );
            })}
        </Table>
      </WrapperContainer>
    </Container>
  );
}

export default Output;
