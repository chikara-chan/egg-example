pipeline {
    agent {
        docker {
            image 'node:carbon' 
            args '--link mysql-container:mysql'
        }
    }
    stages {
        stage('Prepare') {
            steps {
                sh 'docker container ls'
            }
        }
    }
}