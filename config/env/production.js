/**
 * Production environment settings
 * (sails.config.*)
 *
 * What you see below is a quick outline of the built-in settings you need
 * to configure your Sails app for production.  The configuration in this file
 * is only used in your production environment, i.e. when you lift your app using:
 *
 * ```
 * NODE_ENV=production node app
 * ```
 *
 * > If you're using git as a version control solution for your Sails app,
 * > this file WILL BE COMMITTED to your repository by default, unless you add
 * > it to your .gitignore file.  If your repository will be publicly viewable,
 * > don't add private/sensitive data (like API secrets / db passwords) to this file!
 *
 * For more best practices and tips, see:
 * https://sailsjs.com/docs/concepts/deployment
 */
module.exports = {
    datastores: {
        default: {
            adapter: 'sails-mysql',
            url: 'mysql://root:123456@192.168.60.152:3306/weekly-reports',
        }
    },
    session: {
        secret: "extremely-secure-keyboard-cat", 
        cookie: {
            secure: true,
            maxAge: 60 * 60 * 1000  // 1 hours
        }
    },
    models: {
        migrate: 'safe',
    },
    security: {
        cors: {
            allowOrigins: [
              'http://localhost',
              'http://192.168.60.229:1337',
            ]
        }
    },
    sockets: {
        onlyAllowOrigins: [
            'http://localhost',
            'http://192.168.60.229:1337',
        ],
    },
    log: {
        level: 'info'
    }
};
