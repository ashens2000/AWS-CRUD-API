export default{
    EmployeeCreate:{
        Type:'AWS::SNS::Topic',
        Properties:{
            TopicName:'codelabs-student-create-topic-${sls:stage}'
        }
    }
}