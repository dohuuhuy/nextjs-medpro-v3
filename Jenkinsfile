pipeline {
    agent {
         node {
        label 'docker-build'
         }
}
environment {
        URL_NAME = "repo:8083"
        IMAGE_NAME = "medpro-web-nextjs-testing"
    }
  stages {
  // stage("Import secretg file to config"){
  //   steps{
  //       withCredentials([string(credentialsId: "${APP_PROJECT}" , variable: 'SECRET'  )])
  //     {
  //      sh '''
  //      touch config/production.env 
  //      echo ["${SECRET}"] | xargs -n1 > config/production.env
  //      '''
  //     }  
  //   }
  //   }
//     stage("Clean Last Build"){
//         steps{
//         script{
//        try{
//         sh """
//             docker image rm `docker image ls -q`
//         """
//                 }
//     catch(Exception e){
//         println("Removed All Resoure Last Build")                    
//         }
//     }
//     }
// }
    stage('Building image') {
        agent {
          node {
        label 'docker-build'
          }
        }
      steps{
        script {
          sh """ 
          docker build -t ${URL_NAME}/${IMAGE_NAME}:test.date-${BUILD_TIMESTAMP}.ver-${BUILD_NUMBER} --no-cache . -f Dockerfile.dev
          docker push ${URL_NAME}/${IMAGE_NAME}:test.date-${BUILD_TIMESTAMP}.ver-${BUILD_NUMBER}
          """
        }
      }
    }
    stage('pull and deploy ') {
       agent {
         node {
        label 'docker-deploy'
         }
}
      steps{
        script {
          sh """
          docker pull ${URL_NAME}/${IMAGE_NAME}:test.date-${BUILD_TIMESTAMP}.ver-${BUILD_NUMBER}
          docker stop ${IMAGE_NAME}
          docker rm ${IMAGE_NAME}
          docker run -d --name ${IMAGE_NAME} -p 3009:3000 -t ${URL_NAME}/${IMAGE_NAME}:test.date-${BUILD_TIMESTAMP}.ver-${BUILD_NUMBER}
           """
        }
      }
    }
//   stage("Notyfication  to slack ")
  }
}
