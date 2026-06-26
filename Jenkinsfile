pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building SkyCast...'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing SkyCast...'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                sudo cp *.html /var/www/html/
                sudo cp *.css /var/www/html/
                sudo cp *.js /var/www/html/
                sudo systemctl restart nginx
                '''
            }
        }
    }
}
