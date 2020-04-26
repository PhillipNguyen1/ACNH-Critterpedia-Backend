pipeline {
    agent any

    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
    post {
        always {
            discordSend webhookURL: "https://discordapp.com/api/webhooks/703869164565299221/MLJ-VUf5RpFlp5bh9WxotLCgAwMZcHneFfYY9hVsYaGmqWie-dXr0U_1VkUxQJoHPfuB",
                        description: "Jenkins Pipeline Build", 
                        link: env.BUILD_URL, 
                        result: currentBuild.currentResult,
                        successful: currentBuild.resultIsBetterOrEqualTo('SUCCESS')
                        title: env.JOB_NAME
                        
        }
    }
}
