
aha.on({ event: 'aha-develop.github.pr.labeled' }, async ({record, payload}, { identifier, settings }) => {
  if (payload.pull_request.user.login != 'winfred') return;

  if (payload.label.name = 'Ready') {
    record.workflowStatus = { name: 'Ready to ship' };
    record.teamWorkflowStatus = { name: 'Awaiting Deployment' };
    await record.save();
  }
});

aha.on({ event: 'aha-develop.github.pr.unlabeled' }, async ({ record, payload }, { identifier, settings }) => {
  if (payload.pull_request.user.login != 'winfred') return;

  if (payload.label.name = 'Ready') {
    record.workflowStatus = { name: 'In development' };
    record.teamWorkflowStatus = { name: 'In progress' };
    await record.save();
  }
});
