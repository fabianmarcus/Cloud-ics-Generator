#!/usr/bin/env zx

import 'zx/globals';

const flags = [
    '--gen2',
    '--trigger-http',
    '--allow-unauthenticated'
];
$`gcloud functions deploy generate-ics ${flags} --runtime nodejs18 --entry-point main`;