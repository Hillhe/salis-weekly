/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

    /***************************************************************************
    *                                                                          *
    * Default policy for all controllers and actions, unless overridden.       *
    * (`true` allows public access)                                            *
    *                                                                          *
    ***************************************************************************/

    // '*': true,
    '*': 'is-logged-in',
    // Bypass the `is-logged-in` policy for:
    'user/login': true,

    UserController: {
        createUser: 'is-super-admin',
        deleteUser: 'is-super-admin',
    },
    AreaController: {
        addOneArea: 'is-super-admin',
        updataOneArea: 'is-super-admin',
        delOneArea: 'is-super-admin',
    },
    ProjectController: {
        createProject: 'is-super-admin',
        deleteProject: 'is-super-admin',
        updateProdById: 'is-super-admin',
    },
    TaskController: {
        create: 'is-super-admin',
        importLastWeekTask: 'is-super-admin',
    }
};
