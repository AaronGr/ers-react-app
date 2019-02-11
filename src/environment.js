const dev = {
    ersContext: 'http://localhost:3000/'
}

const prod = {
    ersContext: 'ec2-3-85-122-110.compute-1.amazonaws.com/'
}

export let environment = dev;

if (process.env.NODE_ENV === 'production') {
    environment = prod;
}